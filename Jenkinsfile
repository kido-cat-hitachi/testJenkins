pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Check k6 version'
                bat 'k6 version'
//                 sh 'sudo ./setup_k6.sh'
//                 echo 'Running K6 performance tests...'
//                 sh 'k6 run ./index.js'
//                  sh "echo Hello from the shell"
            }
        }
    }
}
