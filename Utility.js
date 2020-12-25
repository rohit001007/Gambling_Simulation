class Utility{

    dailyMergin = 100;
    everyDayBet = 1;
    Day = 1;

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
                }
                if(Result == 0) {
                    lostStake = lostStake-1;
                }
            }
            let winAmount = winStake - this.dailyMergin;
            let lostAmount= this.dailyMergin - lostStake;
            console.log(` \n * Day# ${this.Day}, Win Amount : ${winAmount}, Lost Amount : ${lostAmount}`);  
            
            if(winAmount > lostAmount) 
                console.log(`\n=> Day# ${this.Day} Win By ${winAmount-lostAmount}`);
            else
                console.log(`\n Day# ${this.Day} Lost By ${winAmount-lostAmount}`);
            
            this.Day = this.Day+1;
        }    
    }
}

module.exports = new Utility();