pipeline {
    agent any
    
    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQubeScanner'
                    withSonarQubeEnv('SonarQube Server') {
                        sh "${scannerHome}/bin/sonar-scanner \
                          -Dsonar.projectKey=New \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://13.201.79.82:9000 \
                          -Dsonar.login=61333a0ab96f244f0eb65d41829930d395804f09"
                    }
                }
            }
        }
    }
}
