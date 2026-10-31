@echo off
echo ==============================================================================
echo   MEMBUKA PORTOFOLIO 100%% PERSIS DENGAN ASLINYA (LOCAL SERVER)
echo   Alamat: http://localhost:5000
echo   Untuk mengedit isi portofolio, buka file: edit-portofolio.js
echo ==============================================================================
start http://localhost:5000
python -m http.server 5000 --directory "%~dp0."
pause
