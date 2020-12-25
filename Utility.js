class Utility{

    dailyMergin = 100;
    everyDayBet = 1;
    Day = 1;

    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

        while(this.Day <= 20){

            var winStake = 100;
            var lostStake = 100;

            while(this.dailyMergin != 150 && this.dailyMergin != 50) {

                let Result = this.check_WinORLose();

                if(Result == 1) {
                    this.dailyMergin += 1;
                    console.log(`\n ** GAMBLER WIN **`)
                }
                if(Result == 0) {
                    this.dailyMergin -= 1;
                    console.log(`\n ** GAMBLER LOSE **`)
                }
            }

            let winAmount = winStake - this.dailyMergin;
            let lostAmount= this.dailyMergin - lostStake;
            console.log(` \n * Day# ${this.Day}, Win Amount : ${winAmount}, Lost Amount : ${lostAmount}`);  
            this.Day = this.Day+1;
        }    
    }
}

module.exports = new Utility();