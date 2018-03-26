exports.seed = function (knex, Promise) {
  return knex("achievements").del().then(() => knex("achievements").insert([
    {
      id: 1,
      achievement: "It's over 9000!",
      image: "https://cdn2.iconfinder.com/data/icons/competition-success/512/glory_competitive_trophy_medal_winning_popularity_glory_high_awards_winners_badge_hero_victory_hit_proud_honor_leadership_competition_prize_premium_-512.png",
      detail: "Add the Saiyans Goku, Vegeta and Nappa from the Saiyan Saga to your Collection",
    },
    {
      id: 2,
      achievement: "Father & Son Kamehameha",
      image: "https://cdn2.iconfinder.com/data/icons/competition-success/512/glory_competitive_trophy_medal_winning_popularity_glory_high_awards_winners_badge_hero_victory_hit_proud_honor_leadership_competition_prize_premium_-512.png",
      detail: "Add the Goku & Teen Gohan from the Cell Saga to your Collection",
    },
    {
      id: 3,
      achievement: "Elite Saiyan Warriors",
      image: "https://cdn2.iconfinder.com/data/icons/competition-success/512/glory_competitive_trophy_medal_winning_popularity_glory_high_awards_winners_badge_hero_victory_hit_proud_honor_leadership_competition_prize_premium_-512.png",
      detail: "Add Vegeta & Nappa from the Saiyan Saga to your Collection",
    },
  ])).then(() => knex.raw("ALTER SEQUENCE achievements_id_seq RESTART WITH 4;"));
};
