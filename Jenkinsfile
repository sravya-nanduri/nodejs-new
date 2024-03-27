pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps{
                sh 'npm install'
            }
        }
        
        stage('SonarQube analysis') {
            steps {
                
                withSonarQubeEnv('SonarQube Server') {
                    sh '/path/to/sonar-scanner/bin/sonar-scanner' 
                }
            }
        }
    }
    
    post {
        success {
           
            echo 'Build successful!'
        }
        failure {
            
            echo 'Build failed!'
        }
    }
}
