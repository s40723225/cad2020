var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Topics', 'text': '', 'tags': '', 'url': 'Topics.html'}, {'title': 'W1', 'text': '利用Solidworks與Inventor繪製出圖形 \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'Solidwork與Inventor繪圖練習 \n 圖檔:\xa0 Solidworks 零件繪圖練習1.pdf \n 圖檔 :\xa0 Solidworks 零件繪圖練習2.pdf \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '中秋節休假一周 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '(1) 先下載 \xa0 Wink3.7 \n (2)使用Wink3建立電腦操作流程 \n (3)Wink3的快捷鍵: 截圖Pause開始/結束 Shift+ Pause \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': 'Solidworks API \n API為Application Program Interface英文縮寫, 意為應用編程接口 \n SOLIDWORKS應用程序編程接口（API）是SOLIDWORKS軟件的COM編程接口。 \n 和操作使用軟件本身的功能一樣，屬於應用手法的一種。一般的操作是：通過鼠標點擊，鍵盤鍵入數字操作它現有的按鈕，命令；而API 則是通過編程語言代碼，對現有的功能進行一定的控制，形成新的命令或功能，即利用編程代碼來操控軟件的現有功能 \n 該API包含數百種函數，您可以從Visual Basic（VB），Visual Basic for Applications（VBA），VB.NET，C ++，C＃或SOLIDWORKS宏文件中調用。 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': '工程師的特質(Engineer)', 'text': '工程師兩大特質 \n 1.具有創造性(creat) \n 2.聰明精巧 \n', 'tags': '', 'url': '工程師的特質(Engineer).html'}, {'title': '利用SciTE編輯器類解釋ANSI C程式', 'text': '1.下載\xa0 tcc-0.9.27-win64-bin.zip \n 2. 修改start.bat的路徑 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n \n \n \n set path_portablegit=%Disk%:\\Portablegit\\bin; \n set path_julia=%Disk%:\\julia-1.5.2\\bin; \n set path_tcc=%Disk%:\\tcc\\; \n \xa0 \n path=%Disk%:;%path_python%;%path_portablegit%;%path_julia%;%path_tcc%;%path%; \n \n \n \n \n \n 3.修改完成後重啟並打開 \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n \n \n \n Tiny C Compiler 0.9.27 - Copyright (C) 2001-2006 Fabrice Bellard \n Usage: tcc [options...] [-o outfile] [-c] infile(s)... \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 tcc [options...] -run infile [arguments...] \n General options: \n \xa0\xa0 -c\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 compile only - generate an object file \n \xa0\xa0 -o outfile\xa0 set output filename \n \xa0\xa0 -run\xa0\xa0\xa0\xa0\xa0\xa0\xa0 run compiled source \n \xa0\xa0 -fflag\xa0\xa0\xa0\xa0\xa0 set or reset ( with   \'no-\'   prefix)  \'flag\'   (see tcc -hh) \n \xa0\xa0 -Wwarning\xa0\xa0 set or reset ( with   \'no-\'   prefix)  \'warning\'   (see tcc -hh) \n \xa0\xa0 -w\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 disable all warnings \n \xa0\xa0 -v -vv\xa0\xa0\xa0\xa0\xa0 show version, show search paths or loaded files \n \xa0\xa0 -h -hh\xa0\xa0\xa0\xa0\xa0 show  this , show more help \n \xa0\xa0 -bench\xa0\xa0\xa0\xa0\xa0 show compilation statistics \n \xa0\xa0 -\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 use stdin pipe as infile \n \xa0\xa0 @listfile\xa0\xa0 read arguments from listfile \n Preprocessor options: \n \xa0\xa0 -Idir\xa0\xa0\xa0\xa0\xa0\xa0 add include path  \'dir\' \n \xa0\xa0 -Dsym[=val] define  \'sym\'   with   value  \'val\' \n \xa0\xa0 -Usym\xa0\xa0\xa0\xa0\xa0\xa0 undefine  \'sym\' \n \xa0\xa0 -E\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 preprocess only \n Linker options: \n \xa0\xa0 -Ldir\xa0\xa0\xa0\xa0\xa0\xa0 add library path  \'dir\' \n \xa0\xa0 -llib\xa0\xa0\xa0\xa0\xa0\xa0 link  with   dynamic or static library  \'lib\' \n \xa0\xa0 -r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate (relocatable) object file \n \xa0\xa0 -shared\xa0\xa0\xa0\xa0 generate a shared library/dll \n \xa0\xa0 -rdynamic\xa0\xa0 export all global symbols to dynamic linker \n \xa0\xa0 -soname\xa0\xa0\xa0\xa0 set name  for   shared library to be used at runtime \n \xa0\xa0 -Wl,-opt[=val]\xa0 set linker option (see tcc -hh) \n Debugger options: \n \xa0\xa0 -g\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate runtime debug info \n \xa0\xa0 -b\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 compile  with   built- in   memory and bounds checker (implies -g) \n \xa0\xa0 -bt N\xa0\xa0\xa0\xa0\xa0\xa0 show N callers  in   stack traces \n Misc. options: \n \xa0\xa0 -x[c|a|n]\xa0\xa0 specify type of the next infile \n \xa0\xa0 -nostdinc\xa0\xa0  do   not use standard system include paths \n \xa0\xa0 -nostdlib\xa0\xa0  do   not link  with   standard crt and libraries \n \xa0\xa0 -Bdir\xa0\xa0\xa0\xa0\xa0\xa0 set tcc\'s private include/library dir \n \xa0\xa0 -MD\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate dependency file  for   make \n \xa0\xa0 -MF file\xa0\xa0\xa0 specify dependency file name \n \xa0\xa0 -m32/64\xa0\xa0\xa0\xa0 defer to i386/x86_64 cross compiler \n Tools: \n \xa0\xa0 create library\xa0 : tcc -ar [rcsv] lib.a files \n \xa0\xa0 create def file : tcc -impdef lib.dll [-v] [-o lib.def] \n \n \n \n \n \n 4.在start.bat中輸入tcc \n 5.接著修改SciTE編輯器中的 cpp.properties \n 6. 把SciTE工能表Options往下點擊Open cpp.properties編輯設定檔案且勾選View->Line Number 編輯器中顯示行號，針對476行的設定進行修改 \n \n \n \n 7.完成設定之後，可在編輯器中加入hello.c，再利用Tools->Go執行 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n int   main() { \n printf ( "Hello, world!\\n" ); \n return   0; \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '利用SciTE編輯器類解釋ANSI C程式.html'}, {'title': 'W8', 'text': '\n', 'tags': '', 'url': 'W8.html'}, {'title': '小組meeting', 'text': '', 'tags': '', 'url': '小組meeting.html'}, {'title': 'W10第一次meeting', 'text': '\n', 'tags': '', 'url': 'W10第一次meeting.html'}, {'title': 'W11第二次meeting', 'text': '\n \n', 'tags': '', 'url': 'W11第二次meeting.html'}, {'title': 'W12第三次meeting', 'text': '\n \n', 'tags': '', 'url': 'W12第三次meeting.html'}, {'title': 'W13第四次meeting', 'text': '\n \n', 'tags': '', 'url': 'W13第四次meeting.html'}, {'title': 'W14第五次meeting', 'text': '\n \n', 'tags': '', 'url': 'W14第五次meeting.html'}, {'title': 'W15第六次meeting', 'text': '\n', 'tags': '', 'url': 'W15第六次meeting.html'}]};