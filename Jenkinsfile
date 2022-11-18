pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Check k6 version'
                bat 'k6 version'
                // bat 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                bat 'k6 run ./index.js'
                //  "echo Hello from the shell"
            }
        }
    }
}
