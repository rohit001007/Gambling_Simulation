class Utility{

    dailyMergin = 100;
    everyDayBet = 1;
    Day = 1;

    arr = [];
    dailyEarn = 0;

    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

        while(this.Day <= 30){

            var winStake = 100;
            var lostStake = 100;

            while(winStake < 150 || lostStake > 50) {

                let Result = this.check_WinORLose();

                if(Result == 1) {
                    winStake = winStake+1;
                    this.dailyEarn = this.dailyEarn + 1;
                    this.arr[this.Day-1] = this.dailyEarn;
                }
                if(Result == 0) {
                    lostStake = lostStake-1;
                    this.dailyEarn = this.dailyEarn - 1;
                    this.arr[this.Day-1] = this.dailyEarn;
                }
            }

            let winAmount = winStake - this.dailyMergin;
            let lostAmount= this.dailyMergin - lostStake;
            console.log(` \n * Day# ${this.Day}, Win Amount : ${winAmount}, Lost Amount : ${lostAmount}`);  
            
            if(winAmount > lostAmount) 
                console.log(`\n=> Day# ${this.Day} Win By ${winAmount-lostAmount}`);
            else
                console.log(`\n=> Day# ${this.Day} Lost By ${winAmount-lostAmount}`);
            
            this.Day = this.Day+1;
        }
        this.luckyDay();    
    }

    luckyDay = () =>{

        this.arr.length = 30;
        var luckyDay = 0;
        var unluckyDay = 0;
        var high = this.arr[0];
        var low = this.arr[0];
        
        for (var i = 1; i < this.arr.length; i++){
            if( high < this.arr[i] ){
                high = this.arr[i];
                luckyDay = i+1;
            }
            if( low > this.arr[i] ){
                low = this.arr[i];
                unluckyDay = i+1;
            }
        }
        console.log(`\n * Luckiest Day Is : ${luckyDay}, And He Won : ${high}`);
        console.log(`\n * Unluckiest Day Is : ${unluckyDay}, And He Lost : ${low}`);
    }
}

module.exports = new Utility();