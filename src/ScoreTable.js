import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

class ScoreTable extends Component {
  render() {
    const { scores, doScore, isRolling } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                description={ones.description}
                doScore={(evt) => doScore('ones', ones.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                description={twos.description}
                doScore={(evt) => doScore('twos', twos.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                description={threes.description}
                doScore={(evt) => doScore('threes', threes.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                description={fours.description}
                doScore={(evt) => doScore('fours', fours.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                description={fives.description}
                doScore={(evt) => doScore('fives', fives.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                description={sixes.description}
                doScore={(evt) => doScore('sixes', sixes.evalRoll)}
                rolling={isRolling}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                description={threeOfKind.description}
                doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                description={fourOfKind.description}
                doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                description={fullHouse.description}
                doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                description={smallStraight.description}
                doScore={(evt) =>
                  doScore('smallStraight', smallStraight.evalRoll)
                }
                rolling={isRolling}
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                description={largeStraight.description}
                doScore={(evt) =>
                  doScore('largeStraight', largeStraight.evalRoll)
                }
                rolling={isRolling}
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                description={yahtzee.description}
                doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
                rolling={isRolling}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                description={chance.description}
                doScore={(evt) => doScore('chance', chance.evalRoll)}
                rolling={isRolling}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
