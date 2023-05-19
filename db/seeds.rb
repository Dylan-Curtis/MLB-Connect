require 'uri'
require 'net/http'
require 'json'
require 'openssl'
require 'dotenv/load'
Dotenv.load('apikey.env')


User.destroy_all
Player.destroy_all
Team.destroy_all
Game.destroy_all
TeamGame.destroy_all
Score.destroy_all

puts 'creating teams'

# Mets
Team.create(team_id: 121, logo: "https://content.sportslogos.net/logos/54/67/full/q4eu8h8q5az3jyeeu7eant068.gif", name:'Mets')

# Nats
Team.create(team_id: 120, logo:'https://content.sportslogos.net/logos/54/578/full/v2jxordr9a9ku4grq0dj3zy2o.gif', name:'Nationals')

# Marlins
Team.create(team_id: 146, logo:'https://i.pinimg.com/736x/86/56/bc/8656bc9f60b4ec9e31f97f9d9ad69c95.jpg', name:'Marlins')

# Phillies
Team.create(team_id: 143, logo:'https://content.sportslogos.net/logos/54/70/full/s8g22mq7dy96cnv1wewc51p8v.gif', name:'Phillies')

# Braves
Team.create(team_id: 144, logo:'https://1000logos.net/wp-content/uploads/2017/08/Font-Atlanta-Braves-Logo.jpg', name:'Braves')

# Pirates
Team.create(team_id: 134, logo:'https://i.pinimg.com/originals/e8/38/28/e838288472e07a3a280bf0f564d2de28.gif', name:'Pirates')

# Reds
Team.create(team_id: 113, logo:'https://image.pngaaa.com/273/4501273-middle.png', name:'Reds')

# Brewers
Team.create(team_id: 158, logo:'https://content.sportslogos.net/logos/54/64/full/9543_milwaukee_brewers-wordmark-2020.png', name:'Brewers')

# Cardinals
Team.create(team_id: 138, logo:'https://content.sportslogos.net/logos/54/72/full/0a8uox3r4pny0s4fwf0cf2pxn.png', name:'Cardinals')

# Cubs
Team.create(team_id: 112, logo:'https://content.sportslogos.net/logos/54/54/full/l7wyyio1hf7xrt5jjkn0lgdhb.png', name:'Cubs')

# Padres
Team.create(team_id: 135, logo:'https://content.sportslogos.net/logos/54/73/full/7098_san_diego_padres-wordmark-2020.png', name:'Padres')

# Dodgers
Team.create(team_id: 119, logo:'https://i.pinimg.com/originals/b3/50/15/b35015fbaf2e7591333f422c99b9557d.gif', name:'Dodgers')

#D-Backs
Team.create(team_id: 109, logo:'https://content.sportslogos.net/logos/54/50/full/arizona_diamondbacks_logo_jersey_2020_sportslogosnet-7228.png', name:'Dimondbacks')

# Rockies
Team.create(team_id: 115, logo:'http://www.baseballironons.com/images/Colorado%20Rockies%201993%20Jersey%20Logo%20iron%20on%20heat%20transfer.png', name:'Rockies')

# Giants
Team.create(team_id: 137, logo:'https://content.sportslogos.net/logos/54/74/full/2297.png', name:'Giants')

# Yankees
Team.create(team_id: 147, logo:'https://i.pinimg.com/736x/94/e9/00/94e900556fda4019930a7612566ea51d.jpg', name:'Yankees')

#Red Sox
Team.create(team_id: 111, logo:'https://i.pinimg.com/originals/9c/d6/77/9cd6771e49222b82876cbc14a7e71349.gif', name:'Red Sox')

#Orioles
Team.create(team_id: 110, logo:'https://cdn.freebiesupply.com/images/large/2x/baltimore-orioles-logo-font.png', name:'Orioles')

# BlueJays
Team.create(team_id: 141, logo:'https://content.sportslogos.net/logos/53/78/full/1406.png', name:'BlueJays')

# Rays
Team.create(team_id: 139, logo:'https://1000logos.net/wp-content/uploads/2018/05/Tampa_Bay_Rays-Logo.png', name:'Rays')

# Royals
Team.create(team_id: 118, logo:'https://content.sportslogos.net/logos/53/62/full/dh3hfajrrgstm3e1lo2c58sls.gif', name:'Royals')

# Tigers
Team.create(team_id: 116, logo:'https://i.pinimg.com/originals/33/97/63/33976338060f9742b68a4ed7611d34a9.gif', name:'Tigers')

#Gardians
Team.create(team_id: 114, logo:'https://images.squarespace-cdn.com/content/v1/5a124f7e692ebe2f3e5dff7c/1628003716825-2IZPUAK8U3T1NYVQMLEW/cleveland-guardians-logo-insomniac-studios-28.jpg', name:  'Guardians')

#White Sox
Team.create(team_id: 145, logo:'https://i.ebayimg.com/images/g/7~wAAOSw-R5cf2Co/s-l400.jpg', name:'White Sox')

#Twins
Team.create(team_id: 142, logo:'https://content.sportslogos.net/logos/53/65/full/1615_minnesota_twins-jersey-2015.png', name:'Twins')

#A's
Team.create(team_id: 133, logo:'https://content.sportslogos.net/logos/53/69/full/sioej7efu95jbuxer1tg16ji6.gif', name:'Athletics')

#Astros
Team.create(team_id: 117, logo:'https://content.sportslogos.net/logos/53/4929/full/4396_houston_astros-jersey-2013.png', name:'Astros')

#Rangers
Team.create(team_id: 140, logo:'https://content.sportslogos.net/logos/53/77/full/7035_texas_rangers-jersey-2020.png', name:'Rangers')

#Angels
Team.create(team_id: 108, logo:'https://content.sportslogos.net/logos/53/922/full/4b87h2eqqubs7x5he3sdzeimz.gif', name:'Angels')

#Mariners
Team.create(team_id: 136, logo:'https://i.pinimg.com/originals/b6/e0/19/b6e019b0198559137cc3b2faedccfe64.gif', name:'Mariners')

puts 'creating players'

team_ids = [121 ,120, 146, 143, 144, 134, 113, 158, 138, 112, 135, 119, 109, 115, 137, 147, 111, 110, 141, 139, 118, 116, 114, 145, 142, 133, 117, 140, 108, 136 ]

def get_data_from_api(team_ids)
  team_ids.each do |id|
    puts id
    url = URI("https://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season='2000'&team_id=#{id}&end_season='2022'&sort_order=name_asc")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    api_key = ENV["API_KEY"]
    request["X-RapidAPI-Key"] = api_key
    request["X-RapidAPI-Host"] = 'mlb-data.p.rapidapi.com'
    
    response = http.request(request)
    
    roster = JSON.parse(response.body)["roster_team_alltime"]["queryResults"]["row"]
    roster.each do |bbb|      
      # puts bbb
      team_id = Team.find_by_team_id(bbb["team_id"].to_i)
      # puts team_id
    Player.create!(name: bbb["name_first_last"], team: team_id)
    end
  end
end

get_data_from_api(team_ids)

puts 'creating user'

puts 'creating games'
def dates_for_next_year
  start_date = Date.today 
  end_date = start_date + 1.year - 1.day

  (start_date..end_date).to_a
end

dates = dates_for_next_year
#  ['2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-05', '2023-05-06', '2023-05-07', '2023-05-08', '2023-05-09', '2023-05-10', '2023-05-11', '2023-05-12', '2023-05-13', '2023-05-14', '2023-05-15']
365.times {
 puts"createing a game"
   Game.create!( 
      date: dates[0])
       team_ids = Team.pluck(:id).shuffle.uniq.take(6) 
       puts team_ids
       game_id = Game.order("created_at").last
      #  byebug
      TeamGame.create!(team: Team.find_by_id(team_ids[0]), game:game_id)
      TeamGame.create!(team: Team.find_by_id(team_ids[1]), game:game_id)
      TeamGame.create!(team: Team.find_by_id(team_ids[2]), game:game_id)
      TeamGame.create!(team: Team.find_by_id(team_ids[3]), game:game_id)
      TeamGame.create!(team: Team.find_by_id(team_ids[4]), game:game_id)
      TeamGame.create!(team: Team.find_by_id(team_ids[5]), game:game_id)
      
   dates.shift
  }

  

  # puts 'creating scores'
  # 10.times {Score.create(
  #   user: User.all.sample,
  #   game: Game.all.sample,
  #   time: rand(0.0..5.0)
  #   )}
  
    puts 'finished seeding'