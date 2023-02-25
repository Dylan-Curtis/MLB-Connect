require 'uri'
require 'net/http'
require 'json'


# Users.destroy
# Teams.destroy
# Players.destroy
# Games.destroy
# Scores.destroy

puts 'creating teams'

# Mets
Team.create(team_id: 121, logo: "https://content.sportslogos.net/logos/54/67/full/q4eu8h8q5az3jyeeu7eant068.gif")

# Nats
Team.create(team_id: 120, logo:'https://content.sportslogos.net/logos/54/578/full/v2jxordr9a9ku4grq0dj3zy2o.gif')

# Marlins
Team.create(team_id: 146, logo:'https://i.pinimg.com/736x/86/56/bc/8656bc9f60b4ec9e31f97f9d9ad69c95.jpg')

# Phillies
Team.create(team_id: 143, logo:'https://content.sportslogos.net/logos/54/70/full/s8g22mq7dy96cnv1wewc51p8v.gif')

# Braves
Team.create(team_id: 144, logo:'https://1000logos.net/wp-content/uploads/2017/08/Font-Atlanta-Braves-Logo.jpg')

# Pirates
Team.create(team_id: 134, logo:'https://i.pinimg.com/originals/e8/38/28/e838288472e07a3a280bf0f564d2de28.gif')

# Reds
Team.create(team_id: 113, logo:'https://image.pngaaa.com/273/4501273-middle.png')

# Brewers
Team.create(team_id: 158, logo:'https://content.sportslogos.net/logos/54/64/full/9543_milwaukee_brewers-wordmark-2020.png')

# Cardinals
Team.create(team_id: 138, logo:'https://content.sportslogos.net/logos/54/72/full/0a8uox3r4pny0s4fwf0cf2pxn.png')

# Cubs
Team.create(team_id: 112, logo:'https://content.sportslogos.net/logos/54/54/full/l7wyyio1hf7xrt5jjkn0lgdhb.png')

# Padres
Team.create(team_id: 135, logo:'https://content.sportslogos.net/logos/54/73/full/7098_san_diego_padres-wordmark-2020.png')

# Dodgers
Team.create(team_id: 119, logo:'https://i.pinimg.com/originals/b3/50/15/b35015fbaf2e7591333f422c99b9557d.gif')

#D-Backs
Team.create(team_id: 109, logo:'https://content.sportslogos.net/logos/54/50/full/arizona_diamondbacks_logo_jersey_2020_sportslogosnet-7228.png')

# Rockies
Team.create(team_id: 115, logo:'http://www.baseballironons.com/images/Colorado%20Rockies%201993%20Jersey%20Logo%20iron%20on%20heat%20transfer.png')

# Giants
Team.create(team_id: 137, logo:'https://content.sportslogos.net/logos/54/74/full/2297.png')

# Yankees
Team.create(team_id: 147, logo:'https://i.pinimg.com/736x/94/e9/00/94e900556fda4019930a7612566ea51d.jpg')

#Red Sox
Team.create(team_id: 111, logo:'https://i.pinimg.com/originals/9c/d6/77/9cd6771e49222b82876cbc14a7e71349.gif')

#Orioles
Team.create(team_id: 110, logo:'https://cdn.freebiesupply.com/images/large/2x/baltimore-orioles-logo-font.png')

# BlueJays
Team.create(team_id: 141, logo:'https://content.sportslogos.net/logos/53/78/full/1406.png')

# Rays
Team.create(team_id: 139, logo:'https://1000logos.net/wp-content/uploads/2018/05/Tampa_Bay_Rays-Logo.png')

# Royals
Team.create(team_id: 118, logo:'https://i.pinimg.com/originals/33/97/63/33976338060f9742b68a4ed7611d34a9.gif')

# Tigers
Team.create(team_id: 116, logo:'https://i.pinimg.com/originals/33/97/63/33976338060f9742b68a4ed7611d34a9.gif')

#Gardians
Team.create(team_id: 114, logo:'https://fox8.com/wp-content/uploads/sites/12/2021/07/Script-Guardians-on-White-1.jpg?strip=1')

#White Sox
Team.create(team_id: 145, logo:'https://i.ebayimg.com/images/g/7~wAAOSw-R5cf2Co/s-l400.jpg')

#Twins
Team.create(team_id: 142, logo:'https://content.sportslogos.net/logos/53/65/full/1615_minnesota_twins-jersey-2015.png')

#A's
Team.create(team_id: 133, logo:'https://content.sportslogos.net/logos/53/69/full/sioej7efu95jbuxer1tg16ji6.gif')

#Astros
Team.create(team_id: 117, logo:'https://content.sportslogos.net/logos/53/4929/full/4396_houston_astros-jersey-2013.png')

#Rangers
Team.create(team_id: 140, logo:'https://content.sportslogos.net/logos/53/77/full/7035_texas_rangers-jersey-2020.png')

#Angels
Team.create(team_id: 108, logo:'https://content.sportslogos.net/logos/53/922/full/4b87h2eqqubs7x5he3sdzeimz.gif')

#Mariners
Team.create(team_id: 136, logo:'https://i.pinimg.com/originals/b6/e0/19/b6e019b0198559137cc3b2faedccfe64.gif')

puts 'creating players...'
   

team_ids = [121, 120, 146, 143, 144, 134, 113, 158, 138, 112, 135, 119, 109, 115, 137, 147, 111, 110, 141, 139, 118, 116, 114, 145]

options = {
  headers: {
    'X-RapidAPI-Key': '38368f629fmsh117a78cdc45ef42p1e9694jsn8c07e52f4c3c',
    'X-RapidAPI-Host': 'mlb-data.p.rapidapi.com'
  }
}

def get_data_from_api(team_ids, options)
  team_ids.each do |id|
    uri = URI.parse("https://mlb-data.p.rapidapi.com/json/named.roster_team_alltime.bam?start_season=1994&team_id=#{id}&end_season=2022&sort_order=name_asc.col_in=name_first_last")
    response = Net::HTTP.get_response(uri)
    if response.is_a?(Net::HTTPSuccess)
      roster = JSON.parse(response.body)["roster_team_alltime"]["queryResults"]["row"]
      Player.create(name: roster["name_first_last"], team: roster["team_id"])
    else
      # Handle error case
      raise "Failed to fetch data from API: #{response.code} #{response.message}"
    end
  end
end


puts 'creating user'

User.create(name: 'Dylan', email: "dcurtisj@gmail.com", password:"password")

puts 'creating games'

15.times {Game.create(
  game1: Team.all.sample,
  game2: Team.all.sample,
  game3: Team.all.sample,
  game4: Team.all.sample, 
  game5: Team.all.sample,
  game6: Team.all.sample,  
  )}

  puts 'creating scores'
  10.times {Score.create(
    user: User.all.sample,
    game: Game.all.sample,
    game_time: rand(0.0..5.0)
    )}

    puts 'finished seeding'