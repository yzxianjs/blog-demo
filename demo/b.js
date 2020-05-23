/*
-- 物资能源统计类 UPSERT INTO g_statistic_category( id,name,level,version,parent_id,full_id,full_name,is_leaf,custome_code,material_unit,quantity_rate,money_rate,sort_code,dict_type,rate_unit,created_at) VALUES(735505695608832,"能源类",1,759088313750528,-1,"735505695608832","能源类",false,"statisticEnergy_nengyuan","",0,0,1,"statisticEnergy","万元",now()) ,(740494697780224,"煤炭",2,759088398136320,735505695608832,"735505695608832|740494697780224","能源类|煤炭",false,"statisticEnergy_meitan","",0,0,1,"statisticEnergy","吨",now()) ,(740495054337024,"原油",2,759088470823936,735505695608832,"735505695608832|740495054337024","能源类|原油",false,"statisticEnergy_yuanyou","",0,0,1,"statisticEnergy","吨",now()) ,(740494956925952,"电力",2,759088437138432,735505695608832,"735505695608832|740494956925952","能源类|电力",false,"statisticEnergy_dianli","",0,0,1,"statisticEnergy","万千瓦时",now()) ,(740495171916800,"汽油",2,759088501625856,735505695608832,"735505695608832|740495171916800","能源类|汽油",false,"statisticEnergy_qiyou","",0,0,1,"statisticEnergy","吨",now()) ,(740495404741632,"煤油",2,759088544789504,735505695608832,"735505695608832|740495404741632","能源类|煤油",false,"statisticEnergy_meiyou","",0,0,1,"statisticEnergy","吨",now()) ,(740495486465024,"柴油",2,759088576893952,735505695608832,"735505695608832|740495486465024","能源类|柴油",false,"statisticEnergy_chaiyou","",0,0,1,"statisticEnergy","吨",now()) ,(740495614481408,"燃料油",2,759088614257664,735505695608832,"735505695608832|740495614481408","能源类|燃料油",false,"statisticEnergy_ranliaoyou","",0,0,1,"statisticEnergy","吨",now()) ,(740495884022784,"其他能源",2,759088692474880,735505695608832,"735505695608832|740495884022784","能源类|其他能源",false,"statisticEnergy_qitaenngyuan","",0,0,1,"statisticEnergy","吨标煤",now()) ,(740496168555520,"原材料类",1,759088348140544,-1,"740496168555520","原材料类",false,"statisticEnergy_yuancailiaolei","",0,0,2,"statisticEnergy","万元",now()) ,(740495725458432,"天然气",2,759088657650688,735505695608832,"735505695608832|740495725458432","能源类|天然气",false,"statisticEnergy_tianranqi","",0,0,1,"statisticEnergy","立方米",now()) ,(740496925217792,"钢材",3,759089103844352,740496756888576,"740496168555520|740496756888576|740496925217792","原材料类|黑色金属|钢材",false,"statisticEnergy_gangcai","",0,0,1,"statisticEnergy","吨",now()) ,(740498250765312,"有色金属",2,759088828568576,740496168555520,"740496168555520|740498250765312","原材料类|有色金属",false,"statisticEnergy_yousejinshu","",0,0,1,"statisticEnergy","万元",now()) ,(740498667721728,"炸药",3,759089180349440,740498435699712,"740496168555520|740498435699712|740498667721728","原材料类|化工类|炸药",false,"statisticEnergy_zhayao","",0,0,1,"statisticEnergy","吨",now()) ,(740496756888576,"黑色金属",2,759088794768384,740496168555520,"740496168555520|740496756888576","原材料类|黑色金属",false,"statisticEnergy_heisejinshu","",0,0,1,"statisticEnergy","万元",now()) ,(740498435699712,"化工类",2,759088865719296,740496168555520,"740496168555520|740498435699712","原材料类|化工类",false,"statisticEnergy_huagonglei","",0,0,1,"statisticEnergy","万元",now()) ,(740499155014656,"建材类",2,759088901477376,740496168555520,"740496168555520|740499155014656","原材料类|建材类",false,"statisticEnergy_jiancailei","",0,0,1,"statisticEnergy","万元",now()) ,(740498944160768,"导火索",3,759089244820480,740498435699712,"740496168555520|740498435699712|740498944160768","原材料类|化工类|导火索",false,"statisticEnergy_daohuosuo","",0,0,1,"statisticEnergy","万米",now()) ,(740499718018048,"木材类",2,759088945583104,740496168555520,"740496168555520|740499718018048","原材料类|木材类",false,"statisticEnergy_mucailei","",0,0,1,"statisticEnergy","万元",now()) ,(740499271980032,"水泥",3,759089329542144,740499155014656,"740496168555520|740499155014656|740499271980032","原材料类|建材类|水泥",false,"statisticEnergy_shuini","",0,0,1,"statisticEnergy","吨",now()) ,(740498754622464,"雷管",3,759089213518848,740498435699712,"740496168555520|740498435699712|740498754622464","原材料类|化工类|雷管",false,"statisticEnergy_leiguan","",0,0,1,"statisticEnergy","万发",now()) ,(740499954693120,"锯材",3,759089487885312,740499718018048,"740496168555520|740499718018048|740499954693120","原材料类|木材类|锯材",false,"statisticEnergy_jucai","",0,0,1,"statisticEnergy","立方米",now()) ,(740500415919104,"胶合板",3,759089526100992,740499718018048,"740496168555520|740499718018048|740500415919104","原材料类|木材类|胶合板",false,"statisticEnergy_jioaheban","",0,0,1,"statisticEnergy","立方米",now()) ,(740499840906240,"原木",3,759089454035968,740499718018048,"740496168555520|740499718018048|740499840906240","原材料类|木材类|原木",false,"statisticEnergy_yuanmu","",0,0,1,"statisticEnergy","立方米",now()) ,(740500964226048,"一次转值机电类",2,759089009669120,740496168555520,"740496168555520|740500964226048","原材料类|一次转值机电类",false,"statisticEnergy_yicihzuanzhijidianlei","",0,0,1,"statisticEnergy","万元",now()) ,(740500626224128,"金属制品类",2,759088979571712,740496168555520,"740496168555520|740500626224128","原材料类|金属制品类",false,"statisticEnergy_jinshuzhipinlei","",0,0,1,"statisticEnergy","万元",now()) ,(740501145441280,"其它类",2,759089043436544,740496168555520,"740496168555520|740501145441280","原材料类|其它类",false,"statisticEnergy_qita_other","",0,0,1,"statisticEnergy","万元",now())*/
