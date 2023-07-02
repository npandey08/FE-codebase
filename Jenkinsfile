pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh "sudo npm install"
                sh "sudo run build"
            }
        }
        stage('Test') {
            steps {
                sh "sudo npm run test src/App.test.js"
            }
        }
    }
}