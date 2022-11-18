pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Check git version'
                git version
                // echo 'install '
                // echo 'Check version K6'
                // k6 version
                // echo 'Running K6 performance tests...'
                // sh 'k6 run index.js'
            }
        }
    }
}
