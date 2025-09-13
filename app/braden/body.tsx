
// mui components setup
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

//mui presets
import Button from '@mui/material/Button';



const SLIDER_COUNT = 5;

export function Body({ settingsEnabled,}: { settingsEnabled: boolean}) {
    // react hook for multi-camera switching
  const [camID, setCamId] = React.useState(0);
    // main function for body code.
    return (
        <div className="flex h-screen">
            <div className="flex-[2_1_0%] min-w-0 overflow-hidden p-4 bg-blue-300">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="warning" onClick={() => setCamId(0)}>CAM1</Button>
            <Button variant="contained" color="warning" onClick={() => setCamId(1)}>CAM2</Button>
            </Box>
            <h1 className="flex items-center justify-center pb-6 text-xl">Livestream Demo</h1>
            { (camID == 0) ? (
            <Video1 />
            ) : null }
            { (camID == 1) ? (
            <Video2 />
            ) : null }
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


export function Video1() {
    return(
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/4TIpitPIsPA?si=VJkDSUyuFRcKcYtO?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
    )
}
export function Video2() {
    return(
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/k57aOn5JluY?si=37XpMWZiJqVo8khT?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
    )
}
export default function MultiSliders({ settingsEnabled }: { settingsEnabled: boolean }) {
  // keep all slider values in one array
  
  // Uses a 5x3 array to store min, current, max for each slider
  const [grid, setGrid] = React.useState(
    Array.from({ length: SLIDER_COUNT }, () => [0, 50, 100])
  );

// update the value of a specific slider
  const handleChange = (index: number, newValue: number) =>
    setGrid((prev) => {
        const copy = [...prev];
        copy[index] = [...copy[index]];
        copy[index][1] = newValue;
        return copy;
    });

// control button method to change all sliders to a specific value
  const changeAll = (newValue: number) => {
    for(var i = 0; i < SLIDER_COUNT; i++) {
      handleChange(i, newValue);
    }
    };
    // update min and max of a slider by copying old values and changing only the min or max
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
        {/* warning color is orange */}
            <Button variant="contained" color="warning" onClick={() => changeAll(0)}>0</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(25)}>25</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(50)}>50</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(75)}>75</Button>
            <Button variant="contained" color="warning" onClick={() => changeAll(100)}>100</Button>
      </Box>
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          <Typography variant="subtitle2">Control #{rowIndex + 1}</Typography>
          {/* show settings buttons if settingsEnabled is true */}
          {settingsEnabled ? (
          // add and subtract buttons from min and max 
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
          {/* clickable min and max values */}
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
