using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class ResourceItem
    {
        [Required]
        public int Production { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}