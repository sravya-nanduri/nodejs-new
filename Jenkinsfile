pipeline {
    agent any

   tools {
        // Define SonarQube Scanner tool
        sonarqubeScanner 'SonarQubeScanner'
    }
    

    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    // // Run SonarQube analysis
                    // withSonarQubeEnv('SonarQubeServer') {
                    //     sh "${sonarqubeScanner}/bin/sonar-scanner"
                    echo "${sonarqubeScanner}"
                    }
                }
            }
        }
    }
// }
