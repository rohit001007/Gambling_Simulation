class Utility{

    dailyMergin = 100;
    everyDayBet = 1;

    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

        while(this.dailyMergin != 150 && this.dailyMergin != 50) {

            let Result = this.check_WinORLose();

            if(Result == 1) {
                this.dailyMergin += 1;
                console.log(`\n * GAMBLER WIN *`)
            }
            if(Result == 0) {
                this.dailyMergin -= 1;
                console.log(`\n * GAMBLER LOSE *`)
            }
        }

        if(this.dailyMergin == 150)
            console.log(`\n * Gambler Win 50% Of Stake..`);
        else   
            console.log(`\n * Gambler Lose 50% Of Stake..`);
    }
}

module.exports = new Utility();