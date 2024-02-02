pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // 拉取代码
                git 'https://gitee.com/qglove/qg-iterative-react-coms.git'
            }
        }

        stage('Build') {
            steps {
                // 安装依赖并构建项目
                sh 'yarn'
                sh 'yarn qgbuild'
                sh 'npm publish'
            }
        }
    }

    post {
        always {
            // 这里可以添加构建后的操作，比如清理、发送通知等
            echo 'gitee-react-coms-success'
        }
    }
}
