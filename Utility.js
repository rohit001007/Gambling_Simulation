class Utility{

    dailyMergin = 100;
    everyDayBet = 1;

    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

<<<<<<< HEAD
        let Result = this.check_WinORLose();

=======
        while(this.dailyMergin != 150 && this.dailyMergin != 50) {

            let Result = this.check_WinORLose();

>>>>>>> UC3_ResignFrDay
            if(Result == 1) {
                this.dailyMergin += 1;
                console.log(`\n * GAMBLER WIN *`)
            }
            if(Result == 0) {
                this.dailyMergin -= 1;
                console.log(`\n * GAMBLER LOSE *`)
            }
<<<<<<< HEAD
=======
        }

        if(this.dailyMergin == 150)
            console.log(`\n * Gambler Win 50% Of Stake..`);
        else   
            console.log(`\n * Gambler Lose 50% Of Stake..`);
>>>>>>> UC3_ResignFrDay
    }
}

module.exports = new Utility();