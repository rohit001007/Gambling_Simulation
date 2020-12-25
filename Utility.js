class Utility{

    dailyMergin = 100;
    everyDayBet = 1;
    Win = 0;
    Lose = 0;

    gamble_WinORLose = () => {
        return Math.floor((Math.random()*1)+1);
    }    

    check_WinORLose = () => {

        let Result = this.gamble_WinORLose();

        if(Result == 1) {
            this.Win += 1;
            this.dailyMergin += 1;
        }
        if (Result == 0) {
            this.Lose += 1;
            this.dailyMergin -= 1;
        }
    }
}

module.exports = new Utility();