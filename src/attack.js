const attack = (creatureName, damage, isCritical) => {
    return `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;
}

   export default attack;