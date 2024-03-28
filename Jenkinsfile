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
                        sh 'sonar-scanner \
  -Dsonar.projectKey=New \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://13.201.79.82:9000 \
  -Dsonar.login=61333a0ab96f244f0eb65d41829930d395804f09'
                    }
                }
            }
        }
    }


}
