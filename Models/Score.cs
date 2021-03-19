using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class Score
    {
        [Required]
        public Dictionary<string, int> AwardScore { get; set; } = new Dictionary<string, int>();
        [Required]
        public int CityScore { get; set; }
        [Required]
        public int FinalScore { get; set; }
        [Required]
        public int GreeneryScore { get; set; }
        [Required]
        public Dictionary<string, int> MilestoneScore { get; set; } = new Dictionary<string, int>();
        [Required]
        public int TerraFormingRating { get; set; }
        [Required]
        public int VictoryPoints { get; set; }
    }

}