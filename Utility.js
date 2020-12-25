class Utility{

    dailyMergin = 100;
    everyDayBet = 1;

    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

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
}

module.exports = new Utility();