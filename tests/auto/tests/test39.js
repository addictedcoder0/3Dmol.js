
              var m1 = $3Dmol.download("pdb:2V0E",viewer,{multimodel:true, frames:true},function(){
                  $3Dmol.download("pdb:2MA0",viewer,{multimodel:true, frames:true})
                  .then(function(m2){
                      m1.setStyle({}, {stick:{color:"red"}});
                      m2.setStyle({}, {cartoon:{color:"blue"}});
                      viewer.animate({loop:"forward",reps:1});
                      viewer.render();
                  });
              });
