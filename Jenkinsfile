pipeline {
    agent any
    
    environment {
        SONAR_SCANNER_HOME = tool 'sonarqube-scanner' // Defining SonarQube Scanner tool
        SONAR_TOKEN = credentials('sonar-new') // You need to configure SonarQube token in Jenkins credentials
    }
    
    stages {
        stage('Prepare') {
            steps {
                script {
                    // Download and extract SonarQube Scanner
                    def scannerHome = tool 'sonarqube-scanner'
                    env.PATH = "${scannerHome}/bin:${env.PATH}"
                }
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeServer') {
                        sh 'sonar-scanner -Dsonar.projectKey=brand_new -Dsonar.sources=. -Dsonar.host.url=http://3.109.1.98:9001 -Dsonar.login=${SONAR_TOKEN}'
                    }
                }
            }
        }
    }
    
  
}
