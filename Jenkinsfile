pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }
    }
}