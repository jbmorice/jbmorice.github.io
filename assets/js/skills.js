(function(){
    // Vertical Timeline - by CodyHouse.co
	function SlidingSkills( element ) {
		this.element = element;
		this.skills = this.element.getElementsByClassName("js-skill");
		this.offset = 0.8;
		this.hideBlocks();
	};

	SlidingSkills.prototype.hideBlocks = function() {
		//hide timeline blocks which are outside the viewport
		if ( !"classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.skills.length; i++) {
			(function(i){
				if( self.element.getBoundingClientRect().top > window.innerHeight*self.offset ) {
                    self.skills[i].classList.add("cd-is-hidden");
				}
			})(i);
		}
	};

	SlidingSkills.prototype.showBlocks = function() {
		// if ( ! "classList" in document.documentElement ) {
		// 	return;
		// }
		// var self = this;
		// for( var i = 0; i < this.skills.length; i++) {
		// 	(function(i){
		// 		if( self.skills[i].classList.contains("cd-is-hidden") && self.element.getBoundingClientRect().top <= window.innerHeight*self.offset ) {
		// 			self.skills[i].classList.add("resume-skill-badge--slide-in");
		// 			self.skills[i].classList.remove("cd-is-hidden");
		// 		}
		// 	})(i);
		// }
	};

	var slidingSkillsBlocks = document.getElementsByClassName("js-skill-block"),
        slidingSkillsBlocksArray = [],
		scrolling = false;
	if( slidingSkillsBlocks.length > 0 ) {
		for( var i = 0; i < slidingSkillsBlocks.length; i++) {
			(function(i){
				slidingSkillsBlocksArray.push(new SlidingSkills(slidingSkillsBlocks[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkSlidingSkillsScroll, 250) : window.requestAnimationFrame(checkSlidingSkillsScroll);
			}
		});
	}

	function checkSlidingSkillsScroll() {
		slidingSkillsBlocksArray.forEach(function(slidingSkillsBlock){
			slidingSkillsBlock.showBlocks();
		});
		scrolling = false;
	};
})();