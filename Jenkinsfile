pipeline {
    agent any
    
    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    // Run SonarQube analysis
                    withSonarQubeEnv('SonarQubeServer') {
                        sh '/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQubeScanner/bin/sonar-scanner'
                    }
                }
            }
        }
    }
    
    post {
        success {
            // If the build is successful, you can do further actions here
            echo 'Build successful!'
        }
        failure {
            // If the build fails, you can do further actions here
            echo 'Build failed!'
        }
    }
}
