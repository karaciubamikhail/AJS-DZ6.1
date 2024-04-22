import orderByProps from "../app.js";

test("Sort",()=>{
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const unit = orderByProps(obj, ['level', 'defence']);
    const result = [
    {key: 'level', value: 2}, 
    // порядок взят из массива с ключами
    {key: 'defence', value: 40}, 
    // порядок взят из массива с ключами
    {key: 'name', value: 'мечник'}, 
    // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: 'health', value: 10}, 
    // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: 'attack', value: 80},] 
    // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    expect(unit).toEqual(result);
})
