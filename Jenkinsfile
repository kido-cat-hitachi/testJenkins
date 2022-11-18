pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                winget install k6
                // echo 'install '
                echo 'Check version K6'
                k6 version
                echo 'Running K6 performance tests...'
                sh 'k6 run index.js'
            }
        }
    }
}
