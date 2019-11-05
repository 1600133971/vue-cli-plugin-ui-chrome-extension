rm -rf test-dir &&
vue create test-dir -d &&
cd test-dir && 
npm install --save-dev ../ &&
vue invoke vue-cli-plugin-chrome-ext --name "test 1" --description "test 2" --version "1.0.0" --popup "yes" --script "js"
