# 基本週行事曆製作
## 使用說明
1. getWeekDates 取得某一週的日期，第一個參數是日期物件，第二個參數控制開始日期是週一或週日
2. setDays 繪製行事曆
3. 行事曆繪製抓取 html 中的 template 來做為複製對象
4. 切換上下週是把當前的日期物件加七或減七，再設定回當前日期物件，再執行setDays
5. [示範網址](https://idben.github.io/weekly-calendar-01/)
6. 覺得有用請不吝給顆星星