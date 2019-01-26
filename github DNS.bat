echo "MainDns2Google"
netsh interface ip set dns "로컬 영역 연결" static 8.8.8.8
echo "Done"
echo "SetGoogleIPAddress"
(
echo #ThisIsBeingPatched
echo 52.74.223.119	github.com

)>> C:\Windows\System32\drivers\etc\hosts
echo "Done"
pause
