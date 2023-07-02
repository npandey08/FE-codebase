pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'bdd14098-7bde-4f43-9d84-fda8a9eccf2e', url: 'https://github.com/npandey08/FE-codebase.git'
            }
        }
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