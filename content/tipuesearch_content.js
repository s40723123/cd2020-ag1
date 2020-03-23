var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '直播每周影片', 'text': '', 'tags': '', 'url': '直播每周影片.html'}, {'title': 'w2', 'text': '\n 分配工作流程表 \n \n \n w2會議影片 \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'Assignment1', 'text': '', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'python 亂數分組', 'text': '\n \n 亂數分組名單 \n 影片 \n \n 參考資料 \n https://kk665403.pixnet.net/blog/post/403974404-%5Bpython%5D-python-ramdom%E9%9A%A8%E6%A9%9F%E4%BA%82%E6%95%B8%E7%B0%A1%E6%98%93%E7%94%A8%E6%B3%95?fbclid=IwAR05Kjm0u7LIJWtpdQrwENl1oUDM7uCW2tyVuki-TgGYtXhupVlsu2W52t4 \n', 'tags': '', 'url': 'python 亂數分組.html'}, {'title': 'python 更新至3.8.2', 'text': '1.進入\xa0 https://www.python.org/downloads/release/python-382/  \n 2.下載 Windows x86-64 executable installer \n 3.下載完成後開啟，選擇Customize installation選項 \n \n 4.不要勾選pip選項，接著按下next \n \n 5.選擇路徑將python安裝至可攜式系統中的Y槽下 \n 6.接著開啟start_mdecourse.bat批次檔 \n 7.將 start_mdecourse.bat批次檔中的py373改為安裝python 3.8.2版本的資料夾 \n 8.將安裝的版本資料夾取名為py382 \n \n 8.執行stop.bat批次檔後重新啟動start_mdecourse(為了讓檔案重新讀取) \n 9.輸入get-pip.py，開始安裝pip工具 \n 10.安裝cmsimde所需模組 \n', 'tags': '', 'url': 'python 更新至3.8.2.html'}]};