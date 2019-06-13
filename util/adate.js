/** 
 * ��ȡ���ܡ������ȡ����¡����µĿ�ʼ���ڡ��������� 
 */  
var now = new Date();                    //��ǰ����     
var nowDayOfWeek = now.getDay();         //���챾�ܵĵڼ���     
var nowDay = now.getDate();              //��ǰ��     
var nowMonth = now.getMonth();           //��ǰ��     
var nowYear = now.getYear();             //��ǰ��     
nowYear += (nowYear < 2000) ? 1900 : 0;  //    
  
var lastMonthDate = new Date();  //��������  
lastMonthDate.setDate(1);  
lastMonthDate.setMonth(lastMonthDate.getMonth()-1);  
var lastYear = lastMonthDate.getYear();  
var lastMonth = lastMonthDate.getMonth();  
    
//��ʽ�����ڣ�yyyy-MM-dd     
function formatDate(date) {      
    var myyear = date.getFullYear();     
    var mymonth = date.getMonth()+1;     
    var myweekday = date.getDate();      
         
    if(mymonth < 10){     
        mymonth = "0" + mymonth;     
    }      
    if(myweekday < 10){     
        myweekday = "0" + myweekday;     
    }     
    return (myyear+"-"+mymonth + "-" + myweekday);      
}      
    
//���ĳ�µ�����     
function getMonthDays(myMonth){     
    var monthStartDate = new Date(nowYear, myMonth, 1);      
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);      
    var   days   =   (monthEndDate   -   monthStartDate)/(1000   *   60   *   60   *   24);      
    return   days;      
}     
    
//��ñ����ȵĿ�ʼ�·�     
function getQuarterStartMonth(){     
    var quarterStartMonth = 0;     
    if(nowMonth<3){     
       quarterStartMonth = 0;     
    }     
    if(2<nowMonth && nowMonth<6){     
       quarterStartMonth = 3;     
    }     
    if(5<nowMonth && nowMonth<9){     
       quarterStartMonth = 6;     
    }     
    if(nowMonth>8){     
       quarterStartMonth = 9;     
    }     
    return quarterStartMonth;     
}     
    
//��ñ��ܵĿ�ʼ����     
function getWeekStartDate() {      
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);      
    return formatDate(weekStartDate);     
}      
    
//��ñ��ܵĽ�������     
function getWeekEndDate() {      
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));      
    return formatDate(weekEndDate);     
}      
    
//��ñ��µĿ�ʼ����     
function getMonthStartDate(){     
    var monthStartDate = new Date(nowYear, nowMonth, 1);      
    return formatDate(monthStartDate);     
}     
    
//��ñ��µĽ�������     
function getMonthEndDate(){     
    var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));      
    return formatDate(monthEndDate);     
}     
  
//������¿�ʼʱ��  
function getLastMonthStartDate(){  
    var lastMonthStartDate = new Date(nowYear, lastMonth, 1);  
    return formatDate(lastMonthStartDate);    
}  
  
//������½���ʱ��  
function getLastMonthEndDate(){  
    var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));  
    return formatDate(lastMonthEndDate);    
}  
    
//��ñ����ȵĿ�ʼ����     
function getQuarterStartDate(){     
         
    var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);      
    return formatDate(quarterStartDate);     
}     
    
//��ı����ȵĽ�������     
function getQuarterEndDate(){     
    var quarterEndMonth = getQuarterStartMonth() + 2;     
    var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));      
    return formatDate(quarterStartDate);     
}  
