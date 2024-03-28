pipeline {
    agent any
    
    environment {
        // Define SonarQube Scanner tool
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
        // Add SonarQube token as a credential
        SONAR_TOKEN = credentials('sonar-new')
        // Add SonarQube Scanner's bin directory to the PATH
        PATH = "${SONAR_SCANNER_HOME}/bin:${PATH}"
    }
    
    stages {
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Execute SonarQube scanner command
                    withSonarQubeEnv('SonarQubeServer') {
                        sh "sonar-scanner \
                            -Dsonar.projectKey=New \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://13.201.79.82:9000 \
                            -Dsonar.login=${SONAR_TOKEN}"
                    }
                }
            }
        }
    }
}
