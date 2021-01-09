var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Topics', 'text': '', 'tags': '', 'url': 'Topics.html'}, {'title': 'W1', 'text': '在CD2020之目錄新增資料夾data \n \n Python 3.8.2 \n 至\xa0 https://www.python.org/downloads/release/python-382/ \xa0 搜尋 ”Windows x86-64 executable installer” 下載 ”Windows x86-64 executable installer” ，下載完成後，執行 python-3.8.2-amd64.exe \n PortableGit： \n https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的目錄下 \n start.bat(儲存在CD2020目錄底下) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo off set Disk=y subst %Disk%: "data" %Disk%: set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home set USERPROFILE=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING="utf-8" set PYTHONPATH=%Disk%:\\Python38\\DLLs;%Disk%:\\Python38\\Lib;%Disk%:\\Python38\\Lib\\site-packages; set PYTHONHOME=%Disk%:\\Python38 REM 設定跟 Python 有關的命令搜尋路徑 set path_python=%Disk%:\\Python38;%Disk%:\\Python38\\Scripts; REM for portable git set path_git=%Disk%:\\Portablegit\\bin; set path_julia=%Disk%:\\julia-1.5.2\\bin; set path_tcc=%Disk%:\\tcc\\;   path=%Disk%:;%path_python%;%path_portablegit%;%path_julia%;%path_tcc%;%path%; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %Disk%:\\wScite\\SciTE.exe start /MIN %Disk%:\\wScite\\SciTE.exe Exit \n \n \n \n \n \n \n \n stop.bat(儲存在CD2020目錄底下) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo off set Disk=y path=%PATH%; taskkill /IM python.exe /F taskkill /IM pythonw.exe /F taskkill /IM scite.exe /F REM 終止虛擬硬碟與目錄的對應 subst %Disk%: /D REM 關閉 cmd 指令視窗 taskkill /IM cmd.exe /F EXIT \n \n \n \n \n \n \n \n pip安裝 \n https://bootstrap.pypa.io/get-pip.py 頁面，執行 使用pip安裝flask,bs4,xml,elican, mrkdown,flask_cors,leo模組 \n putty： \n 老師整理的 putty \xa0 下載 putty 放到data，舊的ssh和.gitconfig放到home裡面測試是否可以成功用ssh推送資料。 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'Solidwork與Inventor繪圖練習 \n 圖檔:\xa0 Solidworks 零件繪圖練習1.pdf \n 圖檔 :\xa0 Solidworks 零件繪圖練習2.pdf \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '中秋節休假一周 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W5', 'text': 'API指Application Programming Interface應用程式介面，通常是一些系統廠商，為了能夠讓第三方的開發者可以額外開發應用程式來強化他們的產品，所推出可以與他們系統溝通的介面。 \n 例如 Google Map，第三方的開發者可以輕易的使用 Google Map 所提供的套件，與 Goole 龐大的地圖資料銜接，並鑲嵌在自己的網路；Salesforce 在網路上提供了一套 CRM（Customer Relationship Management，客戶關係管理）介面，幫助使用者做客戶管理，並開啟 SaaS（Software-as-a-service 軟體即服務）的先鋒；Twitter 利用 API 分享他們龐大會員的資訊；Amazon 則提供了一個主機代管的應用介面，來幫助新創公司。 \n Google 提供了許多資料和服務，包含了 Google Map、Gmail、Youtube 等，Google\xa0使用了一些簡單和可用性高的 API 來串連這些資訊，並提供了直覺的介面，讓使用者輕易的鑲入適合的功能，和自己開發的服務做整合。 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': 'SSH \n 鑰匙的指令 \n ssh-keygen -t rsa -b 4096 -C "學號" \n 把製好的id_rsa與id_rsa.pub用putty轉換private key跟public key \n 將id_rsa的密碼放置github setting裡的new sshkey \n \n 修改config的設定 \n \n \n 到putty.exe的session設定github.com \n \n 設定SSH裡的Auth鑰匙.ppk位置，便可不用輸入帳號密碼也能git push了 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': '工程師的特質', 'text': '工程師兩大特質 \n 1.具有創造性(creat) \n 2.聰明精巧 \n \n', 'tags': '', 'url': '工程師的特質.html'}, {'title': 'SciTE編輯', 'text': '修改start.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n set path_julia=%Disk%:\\julia-1.5.2\\bin; \n set path_tcc=%Disk%:\\tcc\\; \n set path_gnuplot=%Disk%:\\gnuplot\\bin; \n path=%Disk%:;%path_python%;%path_portablegit%;%path_julia%;%path_tcc%;%path_gnuplot%;%path%; \n \n \n \n \n \n \n \n \n \n \n \n 修改後重啟並輸入tcc \n \n 修改SciTE的 cpp.properties，呼叫 tcc.exe 類解譯編輯器中副檔名為 .c 的 ANSI C 程式 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n \n \n \n ccopts=-pedantic -Os \n #cc=g++ $(ccopts) -c $(FileNameExt) -o $(FileName).o \n #ccc=gcc $(ccopts) -c $(FileNameExt) -o $(FileName).o \n cc=y:/tcc/tcc.exe -run \n ccc=y:/tcc/tcc.exe -run \n \xa0 \xa0 \n make.command=make \n command.compile.*.c=$(ccc) -std=c99 \n command.build.*.c=$(make.command) \n command.build.*.h=$(make.command) \n command.clean.*.c=$(make.command) clean \n command.clean.*.h=$(make.command) clean \n command.go.*.c=$(cc) $(FileNameExt) \n #command.go.*.c=./$(FileName) \n # To make the Go command both compile (if needed) and execute, use this setting: \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'SciTE編輯.html'}, {'title': 'W8', 'text': 'pyslvs \n 下載pyslvs並練習繪製 \n pyslvs-ui Download \n pyslvs使用手冊 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '期中考週 \n 進行小組自評互評並打期中成績 \n 再與小組討論利用CoppeliaSim進行專案模擬 \n 分成機構組與程式組 \n 並每周進行一次專案討論並記錄過程中的問題 \n', 'tags': '', 'url': 'W9.html'}, {'title': '小組開會紀錄', 'text': '', 'tags': '', 'url': '小組開會紀錄.html'}, {'title': 'W10第一次meeting', 'text': '\n', 'tags': '', 'url': 'W10第一次meeting.html'}, {'title': 'W11第二次meeting', 'text': '\n \n', 'tags': '', 'url': 'W11第二次meeting.html'}, {'title': 'W12第三次meeting', 'text': '\n \n', 'tags': '', 'url': 'W12第三次meeting.html'}, {'title': 'W13第四次meeting', 'text': '\n \n', 'tags': '', 'url': 'W13第四次meeting.html'}, {'title': 'W14第五次meeting', 'text': '\n \n', 'tags': '', 'url': 'W14第五次meeting.html'}, {'title': 'W15第六次meeting', 'text': '', 'tags': '', 'url': 'W15第六次meeting.html'}]};