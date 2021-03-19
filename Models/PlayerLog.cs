using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class PlayerLog
    {
        [Required]
        public Score Score { get; set; } = new Score();
        [Required]
        public Dictionary<string, int> Tags { get; set; } = new Dictionary<string, int>();
        [Required]
        public Dictionary<string, ResourceItem> ResourceData { get; set; }
        [Required]
        public List<int> CardsInHand { get; set; }

    }
}