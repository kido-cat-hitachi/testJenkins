pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                // echo 'Installing k6'
                // sh 'sudo chmod +x setup_k6.sh'
                echo 'Check version K6'
                k6 version
                echo 'Running K6 performance tests...'
                sh 'k6 run index.js'
            }
        }
    }
}
