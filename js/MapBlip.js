
mp.events.add('blip', (sprite, position, scale, color, name) =>
{
    mp.blips.new(sprite, position,
        {
            name: name,
            scale: scale,
            color: color,
            shortRange: true,
        });
});
