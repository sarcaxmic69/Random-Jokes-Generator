const x=[]
x[0]=`An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for a full minute, and then relax. After a few weeks, move up to ten-pound potato bags. Then try 50-pound potato bags, and eventually try to get to where you can lift a 100-pound potato bag in each hand and hold your arms straight for more than a full minute. Once you feel confident at that level, put a potato in each bag. —Beverly Gross`
x[1]=`My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I won’t be able to come to any of your classes or meet for any of the tests. Is this a problem?” —Carol Harper`
x[2]=`Scene: With a patient in my medical exam room Me: How old are your kids? Patient: Forty-four and 39 from my wife who passed away, and from my second wife, 15 and 13. Me: That’s quite the age difference! Patient: Well, the older ones didn’t give me any grandkids, so I made my own. —Mria Murillo`
x[3]="The definition of a perfectionist: someone who wants to go from point A to point A+. —David Bez"
x[4]=`Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees and asked whether they had any. “Sure,” said the first guy. “I’ll get you one.” As he walked to the back, the second guy explained, “We keep them in the storage room. If we leave them out on the counter, people just come in and take them.” —James Nealis`
x[5]=`Things I overheard at my health club:
“I’m only taking this class so I don’t eat for an hour.”
“Who knew 40 years of neglect would have repercussions?”
“Does this body make me look fat?”
—Mark Garvey`
x[6]=`When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf of-wheat design. I handed her the penny. Turning it over and over in her hand, she said, “You know, I always thought they were made of copper.” —Linda Neukrug`
x[7]=`When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf of-wheat design. I handed her the penny. Turning it over and over in her hand, she said, “You know, I always thought they were made of copper.” —Linda Neukrug`
x[8]=`During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got the job. —A.K. via rd.com`
x[9]=`Two guys stole a calendar. They got six months each. —Submitted by Alex Del Bene`
document.getElementById("btnpress").onclick= myFunction;
function myFunction(){
    let v=Math.floor((Math.random()*9)+1);
    document.getElementById("fill").innerHTML=x[v];
}