pipeline {
    agent any
    
    environment {
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
    }
    
    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    // Run SonarQube analysis
                    withSonarQubeEnv('Sonar-new') {
                        sh "${SONAR_SCANNER_HOME}/bin/sonar-scanner"
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
