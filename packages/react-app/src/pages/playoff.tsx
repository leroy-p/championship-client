import styled from 'styled-components'
import rawPlayoffData from '../data/playoff.json'
import Layout from '../layout'
import { formatName } from '../utils/utils'

export default function Playoff() {
  const connectorVars = {
    ['--top' as any]: '25%',
    ['--mid' as any]: '50%',
    ['--bottom' as any]: '75%',
  }
  const connectorVarsFinal = {
    ['--top' as any]: '16.67%',
    ['--mid' as any]: '50%',
    ['--bottom' as any]: '83.33%',
  }

  type Player = { name: string; score: number[] | null }
  type Match = { id: string; players: Player[] }
  type PlayoffData = {
    quarterFinals: Match[]
    semiFinals: Match[]
    final: Match
  }

  const playoffData = rawPlayoffData as PlayoffData

  const getWinner = (match: Match) => {
    const [first, second] = match.players
    const firstScore = first.score
    const secondScore = second.score
    if (firstScore === null || secondScore === null) return null
    const maxSets = Math.min(firstScore.length, secondScore.length)
    let firstSets = 0
    let secondSets = 0

    for (let i = 0; i < maxSets; i += 1) {
      const firstSet = firstScore[i]
      const secondSet = secondScore[i]
      if (firstSet === secondSet) continue
      if (firstSet > secondSet) firstSets += 1
      if (secondSet > firstSet) secondSets += 1
    }

    if (firstSets === secondSets) return null
    return firstSets > secondSets ? first : second
  }

  const getSetWins = (match: Match) => {
    const [first, second] = match.players
    const firstScore = first.score
    const secondScore = second.score
    if (firstScore === null || secondScore === null) return []
    const maxSets = Math.min(firstScore.length, secondScore.length)

    return Array.from({ length: maxSets }, (_, index) => {
      const firstSet = firstScore[index]
      const secondSet = secondScore[index]
      if (firstSet === undefined || secondSet === undefined) return 0
      if (firstSet === secondSet) return 0
      return firstSet > secondSet ? 1 : 2
    })
  }

  const quarterMatches = playoffData.quarterFinals.map((match, index) => ({
    id: match.id,
    players: match.players.map((player) => ({ ...player })),
    gridRow: `${index * 2 + 1} / span 2`,
  }))

  const semiMatches = playoffData.semiFinals.map((match, index) => ({
    id: match.id,
    players: match.players.map((player) => ({ ...player })),
    gridRow: `${index * 4 + 2} / span 2`,
  }))

  const finalMatch = {
    id: playoffData.final.id,
    players: playoffData.final.players.map((player) => ({ ...player })),
    gridRow: '4 / span 2',
  }

  return (
    <Layout>
      <Container>
        <Header>
          <h1>Phase finale</h1>
        </Header>
        <BracketScroll>
          <Bracket>
            {quarterMatches.map((match) => (
              <MatchCard key={match.id} style={{ gridColumn: '1', gridRow: match.gridRow }}>
                {match.players.map((player, playerIndex) => {
                  const winner = getWinner(match as Match)
                  const highlight = winner?.name === player.name
                  const setWins = getSetWins(match as Match)

                  const avatarBaseName = player.name.split(' ')[0]
                  const avatarSrc = player.name === '-' ? null : `/avatars/${formatName(avatarBaseName)}.png`

                  return (
                    <div className={`player-row${highlight ? ' winner' : ''}`} key={player.name}>
                      <div className="pic-container">{avatarSrc && <img alt="" src={avatarSrc} />}</div>
                      <span className="player-name">{player.name}</span>
                      {player.score !== null && (
                        <div className="player-sets">
                          {player.score.map((setScore, setIndex) => {
                            const isWinner = setWins[setIndex] === playerIndex + 1
                            return (
                              <span
                                className={`set-score${isWinner ? ' set-win' : ''}`}
                                key={`${player.name}-${setIndex}`}
                              >
                                {setScore}
                              </span>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </MatchCard>
            ))}
            {semiMatches.map((match) => (
              <MatchCard key={match.id} style={{ gridColumn: '3', gridRow: match.gridRow }}>
                {match.players.map((player, playerIndex) => {
                  const winner = getWinner(match as Match)
                  const highlight = winner?.name === player.name
                  const setWins = getSetWins(match as Match)

                  const avatarBaseName = player.name.split(' ')[0]
                  const avatarSrc = player.name === '-' ? null : `/avatars/${formatName(avatarBaseName)}.png`

                  return (
                    <div className={`player-row${highlight ? ' winner' : ''}`} key={player.name}>
                      <div className="pic-container">{avatarSrc && <img alt="" src={avatarSrc} />}</div>
                      <span className="player-name">{player.name}</span>
                      {player.score !== null && (
                        <div className="player-sets">
                          {player.score.map((setScore, setIndex) => {
                            const isWinner = setWins[setIndex] === playerIndex + 1
                            return (
                              <span
                                className={`set-score${isWinner ? ' set-win' : ''}`}
                                key={`${player.name}-${setIndex}`}
                              >
                                {setScore}
                              </span>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </MatchCard>
            ))}
            <MatchCard key={finalMatch.id} style={{ gridColumn: '5', gridRow: finalMatch.gridRow }}>
              {finalMatch.players.map((player, playerIndex) => {
                const winner = getWinner(finalMatch as Match)
                const highlight = winner?.name === player.name
                const setWins = getSetWins(finalMatch as Match)

                const avatarBaseName = player.name.split(' ')[0]
                const avatarSrc = player.name === '-' ? null : `/avatars/${formatName(avatarBaseName)}.png`

                return (
                  <div className={`player-row${highlight ? ' winner' : ''}`} key={player.name}>
                    <div className="pic-container">{avatarSrc && <img alt="" src={avatarSrc} />}</div>
                    <span className="player-name">{player.name}</span>
                    {player.score !== null && (
                      <div className="player-sets">
                        {player.score.map((setScore, setIndex) => {
                          const isWinner = setWins[setIndex] === playerIndex + 1
                          return (
                            <span
                              className={`set-score${isWinner ? ' set-win' : ''}`}
                              key={`${player.name}-${setIndex}`}
                            >
                              {setScore}
                            </span>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </MatchCard>
            <Connector style={{ gridColumn: '2', gridRow: '1 / 5', ...connectorVars }}>
              <span className="h-top" />
              <span className="h-mid" />
              <span className="h-bottom" />
            </Connector>
            <Connector style={{ gridColumn: '2', gridRow: '5 / 9', ...connectorVars }}>
              <span className="h-top" />
              <span className="h-mid" />
              <span className="h-bottom" />
            </Connector>
            <Connector style={{ gridColumn: '4', gridRow: '2 / 8', ...connectorVarsFinal }}>
              <span className="h-top" />
              <span className="h-mid" />
              <span className="h-bottom" />
            </Connector>
          </Bracket>
        </BracketScroll>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  text-align: center;

  @media screen and (max-width: 824px) {
    margin-bottom: 0;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.4px;
    margin: 0;
  }
`

const BracketScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 8px;
`

const Bracket = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 1fr 40px 1fr;
  grid-template-rows: repeat(8, 64px);
  row-gap: 16px;
  margin: 0 auto;
  max-width: 980px;
  min-width: 760px;
  position: relative;
  width: 100%;
`

const MatchCard = styled.div`
  background-color: rgba(22, 22, 23, 0.2);
  border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
  border-radius: 14px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 10px 12px;
  position: relative;
  z-index: 1;

  .player-row {
    align-items: center;
    display: grid;
    grid-template-columns: auto minmax(140px, 1fr) auto;
    gap: 8px;
  }

  .pic-container {
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
    border-radius: 50%;
    height: 28px;
    overflow: hidden;
    width: 28px;

    & > img {
      height: 100%;
      width: 100%;
    }
  }

  .player-name {
    color: ${({ theme }) => theme.palette.text};
    font-size: 14px;
  }

  .player-sets {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 20px;
    gap: 8px;
    justify-items: center;
  }

  .set-score {
    color: rgba(255, 255, 255, 0.75);
    font-size: 14px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    width: 20px;
    text-align: center;
  }

  .set-score.set-win {
    color: ${({ theme }) => theme.palette.secondary};
    font-weight: 700;
  }

  .player-row.winner .player-name {
    color: ${({ theme }) => theme.palette.secondary};
    font-weight: 700;
  }
`

const Connector = styled.div`
  --line-color: ${({ theme }) => theme.palette.secondary};
  opacity: 0.65;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: var(--top);
    height: calc(var(--bottom) - var(--top));
    width: 2px;
    background-color: var(--line-color);
    transform: translateX(-50%);
  }

  .h-top,
  .h-mid,
  .h-bottom {
    position: absolute;
    height: 2px;
    background-color: var(--line-color);
  }

  .h-top {
    top: var(--top);
    left: 0;
    right: 50%;
  }

  .h-bottom {
    top: var(--bottom);
    left: 0;
    right: 50%;
  }

  .h-mid {
    top: var(--mid);
    left: 50%;
    right: 0;
  }
`
