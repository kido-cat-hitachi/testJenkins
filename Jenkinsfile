pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Check k6 version'
                bat 'k6 version'
                echo 'Running K6 performance tests...'
                bat 'k6 run ./test/k6_script.js'
            }
        }
    }
}
