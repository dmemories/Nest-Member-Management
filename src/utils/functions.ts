export function getJwtSecret() {
    return process.env.JWT_SECRET;
}

export function getJwtLifeTime() {
    return process.env.JWT_LIFE_TIME ?? "12m";
}