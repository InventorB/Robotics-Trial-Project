
// mui components setup
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

//mui presets
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const SLIDER_COUNT = 5;

export function Body({ settingsEnabled }: { settingsEnabled: boolean }) {
    return (
        <div className="flex h-screen">
            <div className="flex-[2_1_0%] min-w-0 overflow-hidden p-4 bg-blue-300">
            <h1 className="flex items-center justify-center pb-6 text-xl">Livestream Demo</h1>
            <Video />
            </div>
            <div className="flex-[1_1_0%] min-w-0 overflow-hidden p-4 bg-red-300">
                <h1 className="flex items-center justify-center pb-6 text-xl">Controls</h1>
                <div className="flex items-center justify-center">
                    <MultiSliders settingsEnabled={settingsEnabled} />
                </div>
            </div>
        
        </div>
    )
}

export function Braden() {
    return (
    <div className="flex items-center justify-center pt-3 pb-6 text-3xl">
      <h1>"Braden was here"</h1>
    </div>
    );
}
export function Video() {
    return(
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/4TIpitPIsPA?si=VJkDSUyuFRcKcYtO?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}
export default function MultiSliders({ settingsEnabled }: { settingsEnabled: boolean }) {
  // keep all slider values in one array
  const [grid, setGrid] = React.useState(
    Array.from({ length: SLIDER_COUNT }, () => [0, 50, 75])
  );

const handleChange = (index: number, newValue: number) =>
    setGrid((prev) => {
        const copy = [...prev];
        copy[index] = [...copy[index]];
        copy[index][1] = newValue;
        return copy;
    });


  const changeAll = (newValue: number) => {
    for(var i = 0; i < SLIDER_COUNT; i++) {
      handleChange(i, newValue);
    }
    };
const updateMin = (index: number, differential: number) =>
    setGrid((prev) => {
        const copy = [...prev];
        copy[index] = [...copy[index]];
        copy[index][0] = copy[index][0] + differential;
        return copy;
    });
    const updateMax = (index: number, differential: number) =>
    setGrid((prev) => {
        const copy = [...prev];
        copy[index] = [...copy[index]];
        copy[index][2] = copy[index][2] + differential;
        return copy;
    });
  return (
    <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="warning" onClick={() => changeAll(0)}>0</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(25)}>25</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(50)}>50</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(75)}>75</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(100)}>100</Button>
      </Box>
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          <Typography variant="subtitle2">Control #{rowIndex + 1}</Typography>
          {settingsEnabled ? (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="error" onClick={() => updateMin(rowIndex,-5)}>MIN -</Button>
          <Button variant="contained" color="success" onClick={() => updateMin(rowIndex,5)}>MIN +</Button>
          <Button variant="contained" color="error" onClick={() => updateMax(rowIndex,-5)}>MAX -</Button>
          <Button variant="contained" color="success" onClick={() => updateMax(rowIndex,5)}>MAX +</Button>
          </Box>
      ) : null }
            <Slider
            step={2.5}
            value={row[1]}
            valueLabelDisplay="auto"
            min={row[0]}
            max={row[2]}
            onChange={(_, newValue) => handleChange(rowIndex, newValue as number)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="body2"
              onClick={() => handleChange(rowIndex, row[0])}
              sx={{ cursor: 'pointer' }}
            >
              {row[0]} min
            </Typography>
            <Typography
              variant="body2"
              onClick={() => handleChange(rowIndex, row[2])}
              sx={{ cursor: 'pointer' }}
            >
              {row[2]} max
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
