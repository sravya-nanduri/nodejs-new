pipeline {
    agent any

    environment {
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner' // Defining SonarQube Scanner tool
        SONAR_TOKEN = credentials('sonar-new') // You need to configure SonarQube token in Jenkins credentials
    }

    stages {
        stage('Prepare') {
            steps {
                script {
                    // Download and extract SonarQube Scanner
                    def scannerHome = tool 'SonarQubeScanner'
                    env.PATH = "${scannerHome}/bin:${env.PATH}"
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeServer') {
                      sh '/opt/sonar-scanner-4.6.2.2472-linux/bin/sonar-scanner -Dsonar.projectKey=New -Dsonar.sources=. -Dsonar.host.url=http://13.201.79.82:9000 -Dsonar.login=******'

                    }
                }
            }
        }
    }


}
