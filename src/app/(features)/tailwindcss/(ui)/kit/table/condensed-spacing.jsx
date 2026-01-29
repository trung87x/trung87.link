import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/catalyst/table";

export default function Example({ players }) {
  return (
    <Table dense className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Rank</TableHeader>
          <TableHeader>Player</TableHeader>
          <TableHeader className="text-right">Pos</TableHeader>
          <TableHeader className="text-right">GP</TableHeader>
          <TableHeader className="text-right">G</TableHeader>
          <TableHeader className="text-right">A</TableHeader>
          <TableHeader className="text-right">P</TableHeader>
          <TableHeader className="text-right">+/-</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {players.map((player) => (
          <TableRow key={player.rank}>
            <TableCell className="tabular-nums">{player.rank}</TableCell>
            <TableCell className="font-medium">{player.name}</TableCell>
            <TableCell className="text-right">{player.position}</TableCell>
            <TableCell className="text-right tabular-nums">
              {player.gamesPlayed}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.goals}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.assists}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.points}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.plusMinus}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
