cd frontend && npm install && npm run-script build && cd ..

rm -rf backend/static/*

cp -R frontend/build/static/* backend/static/
cp frontend/build/* backend/static/
