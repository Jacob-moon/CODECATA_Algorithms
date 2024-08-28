import chalk from 'chalk';
import readlineSync from 'readline-sync';

let logs = [];

class Player {
  constructor() {
    this.hp = 100 + Math.round(Math.random() * 30);
    this.minatk = 10 + Math.round(Math.random() * 5);
    this.atk = 2 * this.minatk;
    this.defdmg = 5;
    this.runpercent = 50;
    this.sec_atkpercent = 50;
    this.defpercent = 50;
  }
 


  attack(monster) {
    const dmg = Math.random() * (this.atk - this.minatk) + this.minatk;
    logs.push(chalk.blue(`플레이어가 몬스터에게 ${dmg.toFixed()}만큼 데미지를 입혔습니다.`));
    monster.hp -= dmg;
    if (dmg > 0) {
      const sa = Math.floor(Math.random() * 100);
      if (sa < this.sec_atkpercent) {
        logs.push(chalk.blue(`성공적으로 플레이어가 몬스터에게 ${dmg.toFixed()}만큼 추가 데미지를 입혔습니다.`));
        monster.hp -= dmg;
        return true;
      } else {
        return false;
      }


    }
  }
  defense() {
    const def = Math.random() * 100;

    if (def < this.defpercent) {
      logs.push(chalk.blue(`성공적으로 플레이어가 몬스터에게 ${this.defdmg.toFixed()}만큼 방어 했습니다.`));
      this.hp += this.defdmg;
      return true;
    } else {
      logs.push(chalk.blue(`방어에 실패했습니다..`));
      return false;
    }
  }



  // 플레이어의 공격
  // 연속 공격 (확률) -> 완료
  // 방어하기 (확률) ->완료

  //그 외 다른행동 넣기

  run() {
    const r1 = Math.random() * 100;
    if (r1 < this.runpercent) {
      logs.push(chalk.blue('플레이어가 도망에 성공했습니다!'));
      return true;

    } else {

      logs.push(chalk.blue('플레이어가 도망에 실패했습니다'));
      return false;
    }

  }

}
class Monster {
  constructor(stage) {
    this.hp = 80 + Math.round(Math.random() * 20)*stage;
    this.minatk = 4 + Math.round(Math.random() * 5)*stage;
    this.atk = 2 * this.minatk;


  }


  attack(player) {
    const dmg = Math.random() * (this.atk - this.minatk) + this.minatk;
    logs.push(chalk.red(`몬스터가 플레이어에게 ${dmg.toFixed()}만큼 데미지를 입혔습니다.`));
    player.hp -= dmg;
    // 몬스터의 공격
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
    chalk.blueBright(
      `| player HP:${player.hp.toFixed()},attack:${player.minatk}~${player.minatk*2}}`,
    ) +
    chalk.redBright(
      `| monster HP:${monster.hp.toFixed()},Attack:${monster.minatk}~${monster.minatk*2}} |`,
    ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  logs = [];

  while (player.hp > 0 && monster.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 도망가기. 3.방어하기`,
      ),
    );
    const choice = readlineSync.question('당신의 선택은? ');


    if (choice === '1') {

      player.attack(monster);



      if (monster.hp > 0) {
        monster.attack(player);

      } else {

        logs.push(chalk.red('승리'));
        break;
      }
    }
    else if (choice === '2') {
      if (player.run()) {
        break;
      } else {
        logs.push(chalk.red('도망에 실패하여 몬스터가 공격합니다'));
        monster.attack(player);


      }
    }
    else if (choice === '3') {
      player.defense();

      if (monster.hp > 0) {
        monster.attack(player);

      }
    }

    if (player.hp <= 0) {

      logs.push(chalk.red('패배 하였습니다'));
      break;

    }
    if (monster.hp <= 0) {
      console.log()
      logs.push(chalk.red('승리 했습니다'));
      break;

    }




    // logs.push(chalk.blue(``));
    // logs.push(chalk.red(``));
    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }

};

export async function startGame() {
  console.clear();
  
  let stage = 1;

    
    const player = new Player(stage);
    const monster = new Monster(stage);
  while (stage <= 10) {
    
    

    await battle(stage, player, monster);

    if (player.hp <= 0) {
      logs.push(chalk.green('패배하였습니다'));
      break;

    } else if (monster.hp <= 0) {


      logs.push(chalk.green('승리하였습니다'));

    }


    // 스테이지 클리어 및 게임 종료 조건

    logs.push(chalk.green('다음 단계로 넘어갑니다.'));

    stage++;


    player.hp += 200;

    logs.push(chalk.green('200만큼 체력이 회복되었습니다.'));

    player.hp += Math.round(Math.random() * 30)+300;

    player.minatk += Math.round(Math.random() * 10)+50;

    monster.hp += Math.round(Math.random() * 30)+200;

    monster.minatk += Math.round(Math.random() * 10)+50;

    //플레이어 체력회복을 이런식으로도 할수있음.
  }





  if (stage > 10) {
    console.log('승리!!! 축하합니다')
  }

}


// 콘솔 로그 안나오는것 , 몬스터 스테이지마다 강해질것. ->해결 class 부분 constructor (변경)
